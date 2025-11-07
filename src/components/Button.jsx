export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={`btn ${variant === 'outline' ? 'btn-outline' : ''}`} {...props}>
      {children}
    </button>
  );
}
