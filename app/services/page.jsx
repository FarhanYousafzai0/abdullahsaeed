"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Profile Optimization",
    points: [
      "Tailored profile design that highlights your unique skills and experiences.",
      "Strategic keywords to increase visibility in LinkedIn searches.",
      "Crafting a compelling summary that captures attention."
    ]
  },
  {
    title: "LinkedIn Account Management",
    points: [
      "Regular content posting to engage your audience.",
      "Connection management to ensure you’re connecting with relevant professionals.",
      "Endorsement and recommendation strategies to strengthen your profile."
    ]
  },
  {
    title: "Personal Branding",
    points: [
      "Personalized tips on positioning yourself as an industry leader.",
      "Help with showcasing your achievements and projects in an attractive way."
    ]
  },
  {
    title: "LinkedIn Coaching",
    points: [
      "One-on-one sessions to guide you through LinkedIn best practices.",
      "Advice on growing your network and making valuable connections."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our LinkedIn Services</h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            At Abdullah LinkedInWala, we offer comprehensive LinkedIn services designed to enhance your online presence and increase your professional connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Badge variant="default">{idx + 1}</Badge> {service.title}
                </CardTitle>
              </CardHeader>
              <Separator className="mb-2" />
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
