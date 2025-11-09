'use server';

import { visualizeGithubContributions, type VisualizeGithubContributionsOutput } from '@/ai/flows/visualize-github-contributions';
import { z } from 'zod';

const formSchema = z.object({
  githubUsername: z.string().min(1, 'GitHub username is required'),
});

type State = {
  status: 'initial' | 'loading' | 'success' | 'error';
  message: string;
  data?: VisualizeGithubContributionsOutput;
};

export async function handleVisualization(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validation = formSchema.safeParse({
    githubUsername: formData.get('githubUsername'),
  });

  if (!validation.success) {
    return {
      status: 'error',
      message: validation.error.errors[0].message,
    };
  }

  try {
    const result = await visualizeGithubContributions(validation.data);
    return {
      status: 'success',
      message: 'Visualization generated successfully.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Failed to generate visualization. Please try again later.',
    };
  }
}
