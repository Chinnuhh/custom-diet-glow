import { motion } from "framer-motion";
import { ClipboardCheck, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description: "Complete a comprehensive health and lifestyle questionnaire"
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "One-on-one session to discuss your goals and create your plan"
  },
  {
    icon: Sparkles,
    title: "Custom Plan",
    description: "Receive your personalized diet and therapy plan"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to start your transformation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-primary mb-6">
                <step.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};