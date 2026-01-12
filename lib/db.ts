// ==========================================
// FILE: lib/db.ts
// ==========================================
import { neon } from "@neondatabase/serverless";

// Build the connection string from environment variables
const DATABASE_URL = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require&channel_binding=require`;

// Create a query client
const sql = neon(DATABASE_URL);

// ---------------------------
// Types
// ---------------------------
export type PortfolioProfile = {
  id: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin_url: string | null;
  github_url: string | null;
  profile_image_url: string | null;
  website_url: string | null;
  cv_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  short_description: string | null;
  image_url: string | null;
  live_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  tags: string;
  date_completed: string | null;
  created_at: string;
  updated_at: string;
};

// ---------------------------
// Queries
// ---------------------------

// Get latest portfolio profile
export async function getPortfolioProfile(): Promise<PortfolioProfile | null> {
  try {
    const result = await sql<PortfolioProfile[]>`
      SELECT * FROM portfolio_profile 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    return result[0] || null;
  } catch (error) {
    console.error("Error fetching portfolio profile:", error);
    return null;
  }
}

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  try {
    const result = await sql<Project[]>`
      SELECT * FROM projects 
      ORDER BY date_completed DESC NULLS LAST
    `;
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Get single project by ID
export async function getProjectById(id: number): Promise<Project | null> {
  try {
    const result = await sql<Project[]>`
      SELECT * FROM projects 
      WHERE id = ${id}
    `;
    return result[0] || null;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
}