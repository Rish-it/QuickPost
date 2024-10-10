// src/types/hono.d.ts

import "hono";

declare module "hono" {
  interface Context {
    // Extend the Context interface to include custom variables
    userId?: string; // You can make this optional or required based on your needs
  }
}

