import React from 'react';
import { Motorcycle, Wind, Shield, Tool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="w-full md:w-64">
    <CardHeader>
      <Icon className="w-12 h-12 mb-4 text-primary" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default function MotorcycleLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-2">RideRevolution</h1>
        <p className="text-xl text-gray-300">Unleash Your Freedom on Two Wheels</p>
      </header>

      <main className="container mx-auto">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Experience the Thrill of the Open Road</h2>
              <p className="text-lg mb-6">
                Discover the perfect blend of power, style, and freedom with our cutting-edge motorcycles. 
                Whether you're a seasoned rider or just starting your journey, we have the ideal machine for you.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Explore Our Models
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Sleek motorcycle on a winding road" 
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose RideRevolution?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Motorcycle}
              title="Cutting-Edge Technology"
              description="Experience the latest advancements in motorcycle engineering and performance."
            />
            <FeatureCard 
              icon={Wind}
              title="Unmatched Performance"
              description="Feel the power and precision of our finely-tuned machines on every ride."
            />
            <FeatureCard 
              icon={Shield}
              title="Safety First"
              description="Ride with confidence knowing you're protected by state-of-the-art safety features."
            />
            <FeatureCard 
              icon={Tool}
              title="Expert Support"
              description="Our team of skilled technicians ensures your bike is always in top condition."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Join the RideRevolution Community</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 text-center">
              Sign up for our newsletter to receive the latest updates, exclusive offers, and invitations to motorcycle events near you.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:w-64 px-4 py-2 mb-4 md:mb-0 md:mr-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 RideRevolution. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Embrace the journey. Live the legend.</p>
        </div>
      </footer>
    </div>
  );
}