import { motion } from "framer-motion";
import { Scale, Heart, Brain, Leaf } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Weight Management",
    description: "Personalized plans for weight loss and gain, tailored to your body type and goals"
  },
  {
    icon: Heart,
    title: "Health Conditions",
    description: "Specialized diet plans for thyroid, blood pressure, and diabetes management"
  },
  {
    icon: Brain,
    title: "Holistic Therapy",
    description: "Complementary therapeutic approaches for overall wellness"
  },
  {
    icon: Leaf,
    title: "Custom Nutrition",
    description: "Balanced meal plans that fit your lifestyle and dietary preferences"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your health and wellness journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card bg-white"
            >
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};