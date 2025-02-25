
import { useState } from "react";
import { motion } from "framer-motion";
import { Circuit, Brain, MessageSquare, Image } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "AI Tools",
    description: "Powerful tools for automation and efficiency",
    icon: Circuit,
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    id: 2,
    title: "AI Images",
    description: "Generate stunning visuals with AI",
    icon: Image,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: 3,
    title: "AI Software",
    description: "Enterprise-grade AI solutions",
    icon: Brain,
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    id: 4,
    title: "AI Chatbots",
    description: "Intelligent conversational agents",
    icon: MessageSquare,
    color: "from-violet-500/20 to-violet-600/20",
  },
];

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass text-primary"
          >
            Welcome to the Future
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            AI Store – Innovate the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Discover cutting-edge AI solutions that transform the way you work and create
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="button-glow px-8 py-3 rounded-lg glass text-white font-medium"
          >
            Explore Products
          </motion.button>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60"
            >
              Explore our curated collection of AI-powered solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: category.id * 0.1 }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative glass rounded-2xl p-6 cursor-pointer transition-all duration-300 group ${
                  hoveredCard === category.id ? "scale-105" : ""
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-20`} />
                <div className="relative z-10">
                  <category.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-white/60">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
