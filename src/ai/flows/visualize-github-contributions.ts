'use server';

/**
 * @fileOverview Generates a 3D visualization of GitHub contributions using GenAI.
 *
 * - visualizeGithubContributions - A function that generates the visualization.
 * - VisualizeGithubContributionsInput - The input type for the visualizeGithubContributions function.
 * - VisualizeGithubContributionsOutput - The return type for the visualizeGithubContributions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeGithubContributionsInputSchema = z.object({
  githubUsername: z.string().describe('The GitHub username to visualize contributions for.'),
});
export type VisualizeGithubContributionsInput = z.infer<typeof VisualizeGithubContributionsInputSchema>;

const VisualizeGithubContributionsOutputSchema = z.object({
  visualizationDataUri: z
    .string()
    .describe(
      'A data URI containing the 3D visualization data, likely in a format like GLB or similar, that can be rendered in a 3D viewer. The data URI must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // GLB format
    ),
  insights: z.string().describe('A summary of the user\'s GitHub contributions and coding activity.'),
});
export type VisualizeGithubContributionsOutput = z.infer<typeof VisualizeGithubContributionsOutputSchema>;

export async function visualizeGithubContributions(input: VisualizeGithubContributionsInput): Promise<VisualizeGithubContributionsOutput> {
  return visualizeGithubContributionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeGithubContributionsPrompt',
  input: {schema: VisualizeGithubContributionsInputSchema},
  output: {schema: VisualizeGithubContributionsOutputSchema},
  prompt: `You are an expert in creating engaging 3D visualizations of data.  You will take GitHub contribution data for the user {{githubUsername}} and respond with a visualization of their coding activity that employers can easily understand.

You must respond with a visualizationDataUri, which contains the 3D visualization data, and insights, which contains a summary of the GitHub contributions.

Consider these visualization ideas:

*   Represent each repository as a planet in a solar system, sized by the number of commits.
*   Show commit activity over time as a rising and falling landscape.
*   Use colors to represent different programming languages used.

Here\'s how the output should be formatted:
{
  visualizationDataUri: \'data:<mimetype>;base64,<encoded_data>\',
  insights: \'A summary of the user\'s GitHub contributions and coding activity.\',
}
`, // MUST be a data URI that can be rendered in a 3D viewer.
});

const visualizeGithubContributionsFlow = ai.defineFlow(
  {
    name: 'visualizeGithubContributionsFlow',
    inputSchema: VisualizeGithubContributionsInputSchema,
    outputSchema: VisualizeGithubContributionsOutputSchema,
  },
  async input => {
    // In a real implementation, you would fetch data from the GitHub API here.
    // For this example, we'll return mock data.

    // const githubData = await fetchGitHubData(input.githubUsername);

    const {output} = await prompt(input);
    return output!;
  }
);
