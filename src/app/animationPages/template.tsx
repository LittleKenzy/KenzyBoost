import motion from 'framer-motion'

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-bold">Boost your brand with KenzyBoost</h2>
    </motion.div>
  );
}
