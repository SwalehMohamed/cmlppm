// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Orders = {
  id: string;
  mo: string;
  so: string;
  Product: string;
  Canvas: 'Store' | 'Approval' | 'Cutting' | 'PVC Welding' | 'Stiching' | 'Branding' | 'Half Copmlete' | 'Complete';
  Frame: 'Cutting' | 'Setting and Welding' | 'Grinding' | 'Filler' | 'Sanding' | 'Painting';
  Worker: string;
  DOC: string;
  Comment: 'On Hold' | 'Processing';
};

