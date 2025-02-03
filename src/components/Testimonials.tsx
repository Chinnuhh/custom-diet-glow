import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The personalized diet plan helped me manage my thyroid condition naturally. I feel more energetic than ever!",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "Thanks to Chandra's holistic approach, I've not only lost weight but also improved my blood pressure levels.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    text: "The combination of diet planning and therapy has transformed my relationship with food. Highly recommended!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real stories from real people</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
          <div className="space-y-2">
            <p className="text-xl text-gray-600">Contact Chandra</p>
            <p className="text-xl text-accent font-semibold">+91 7989362266</p>
          </div>
        </div>
      </div>
    </section>
  );
};