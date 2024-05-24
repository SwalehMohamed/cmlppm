'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  mo: z.string({
    invalid_type_error: 'Please enter MO Number.',
  }),
  so: z.string({
    invalid_type_error: 'Please enter SO Number.',
  }),
  canvas: z.enum(['N/A', 'Store', 'Approval', 'Cutting', 'PVC Welding', 'Stiching', 'Branding', 'Half Copmlete', 'Complete'], {
    invalid_type_error: 'Please select an status of the canvas.',
  }),
  frame: z.enum(['N/A', 'Cutting', 'Setting', 'Welding', 'Grinding', 'Filler', 'Sanding', 'Painting'], {
    invalid_type_error: 'Please select an status of the frame.',
  }),
  worker: z.string({
    invalid_type_error: 'Please enter name of the worker.',
  }),
  doc: z.string({
    invalid_type_error: 'Please enter approximate date of completion.',
  }),

  comment: z.enum(['On Hold' , 'Processing'], {
    invalid_type_error: 'Please select a status.',
  }),
});
 
const CreateOrder = FormSchema.omit({ });

export type State = {
  errors?: {
    mo?: string[];
    so?: string[];
    canvas?: string[];
    frame?: string[];
    worker?: string[];
    doc?: string[];
    comment?: string[];
  };
  message?: string | null;
};
 
export async function createOrder(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateOrder.safeParse({
    mo: formData.get('mo'),
    so: formData.get('so'),
    canvas: formData.get('canvas'),
    frame: formData.get('frame'),
    worker: formData.get('worker'),
    doc: formData.get('doc'),
    comment: formData.get('comment'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Order.',
    };
  }
 
  // Prepare data for insertion into the database
  const { mo, so, canvas, frame, worker, doc, comment } = validatedFields.data;
 
  // Insert data into the database
  try {
    await sql`
      INSERT INTO orders (mo, so, canvas, frame, worker, doc, comment)
      VALUES (${mo}, ${so}, ${canvas}, ${frame}, ${worker}, ${doc}, ${comment})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Order.',
    };
  }
 
  // Revalidate the cache for the order page and redirect the user.
  revalidatePath('/dashboard/orders');
  redirect('/dashboard/orders');
}



  // Use Zod to update the expected types
const UpdateOrder = FormSchema.omit({ });
 
// ...
 
export async function updateOrder(
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateOrder.safeParse({
    mo: formData.get('mo'),
    so: formData.get('so'),
    canvas: formData.get('canvas'),
    frame: formData.get('frame'),
    worker: formData.get('worker'),
    doc: formData.get('doc'),
    comment: formData.get('comment'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Order.',
    };
  }
 
  const { mo, so, canvas, frame, worker, doc, comment } = validatedFields.data;
 
  try {
    await sql`
    INSERT INTO orders (mo, so, canvas, frame, worker, doc, comment)
    VALUES (${mo}, ${so}, ${canvas}, ${frame}, ${worker}, ${doc}, ${comment})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Order.' };
  }
 
  revalidatePath('/dashboard/orders');
  redirect('/dashboard/orders');
}

export async function deleteOrders(mo: string) {
  try {
    await sql`DELETE FROM orders WHERE mo = ${mo}`;
    revalidatePath('/dashboard/orders');
    return { message: 'Deleted Order.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Order.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}