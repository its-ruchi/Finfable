import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../Backgroundimg.png';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto space-y-16 p-4 md:p-8 lg:p-12">
      {/* Hero Section */}
      <section className="hero-section text-center space-y-6 p-6 md:p-10">
        <div className="hero-inner">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Welcome to FinFable
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground">
            Make financial planning more engaging through storytelling
          </p>
          {/* Hero illustration using local asset */}
          <div className="mx-auto my-6 w-full max-w-4xl hero-illustration-card relative overflow-hidden aspect-[16/7]">
            <Image
              src={heroImg}
              alt="People reviewing financial charts and collaborating"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4">
            <Button
              asChild
              className="btn-primary px-6 py-3"
            >
              <Link href="/set-goals">Start Your Financial Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          title="Visual Journey"
          description="See your financial goals come to life through interactive visualizations."
          variant="visual"
        />
        <FeatureCard
          title="What-If Scenarios"
          description="Explore different financial paths with our interactive scenario planner."
          variant="whatif"
        />
        <FeatureCard
          title="Achievement System"
          description="Earn rewards and track your progress as you reach financial milestones."
          variant="achievement"
        />
        <FeatureCard
          title="Family Planning"
          description="Collaborate with family members on shared financial goals."
          variant="family"
        />
      </section>

      {/* Insights Section */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          AI-Powered Insights
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-foreground">
          Get personalized financial advice based on your spending patterns and goals.
        </p>
        <Button
          variant="outline"
          asChild
          className="border border focus:border-primary text-primary hover:bg-secondary/40 px-6 py-3 rounded-md focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Link href="/dashboard">View Your Insights</Link>
        </Button>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  variant = 'default',
}: {
  title: string;
  description: string;
  variant?: 'default' | 'visual' | 'whatif' | 'achievement' | 'family';
}) {
  return (
    <Card variant={variant} className="p-8 rounded-xl shadow-sm hover-lift">
      <h3 className="text-lg md:text-xl font-semibold mb-3 card-accent">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{description}</p>
    </Card>
  );
}
