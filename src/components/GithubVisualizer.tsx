'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleVisualization } from '@/app/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal, Loader, Github } from 'lucide-react';
import { ThreeScene } from './ThreeScene';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  status: 'initial' as const,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-primary-hover">
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Visualize'
      )}
    </Button>
  );
}

export function GithubVisualizer() {
  const [state, formAction] = useFormState(handleVisualization, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="visualizer">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          <span className="text-primary">//</span> GitHub Activity Visualizer
        </h2>
        <p className="text-lg text-foreground/80 mb-12">
          An AI-powered tool to visualize your GitHub contributions in 3D and generate insights for employers.
        </p>

        <Card className="bg-card/50 border-border p-6">
          <form action={formAction} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                name="githubUsername"
                placeholder="Enter a GitHub username"
                required
                className="pl-10 h-12 text-base bg-background/50"
              />
            </div>
            <SubmitButton />
          </form>
        </Card>

        {state.status === 'success' && state.data && (
          <div className="mt-8 grid gap-8">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle>3D Contribution Graph</CardTitle>
                <CardDescription>
                  Interact with the 3D model of the contribution history. Pan, zoom, and rotate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg border border-dashed border-primary/30 bg-background/30 p-2">
                  <ThreeScene dataUri={state.data.visualizationDataUri} />
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>AI-Generated Insights</AlertTitle>
              <AlertDescription className="text-left">
                {state.data.insights}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </section>
  );
}
