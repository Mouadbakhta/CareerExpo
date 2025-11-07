import { motion } from 'framer-motion';

export default function EventCard({ year, title, stats }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="event-card"
    >
      <h3>{year}</h3>
      <p>{title}</p>
      <p>{stats}</p>
    </motion.div>
  );
}
