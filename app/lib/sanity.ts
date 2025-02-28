
import { createClient, SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Type definition for the environment variables
interface SanityEnv {
  NEXT_PUBLIC_SANITY_PROJECT_ID: string
  NEXT_PUBLIC_SANITY_DATASET: string
}

// Get environment variables with type safety
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string

// Create Sanity client with proper typing
export const client: SanityClient = createClient({
  projectId, // Sanity Project ID
  dataset, // Sanity Dataset (e.g., "production")
  useCdn: true, // Use CDN for faster response
  apiVersion: '2022-03-07', // Use a specific API version
})

// Initialize imageUrlBuilder with the client
const builder = imageUrlBuilder(client)

// Define the function that generates the image URL
export function urlFor(source: any) {
  return builder.image(source)
}
