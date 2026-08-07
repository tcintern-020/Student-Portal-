import Link from 'next/link';

export default function Button({ children, href, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseStyles = 'inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300 hover:shadow-lg',
    secondary: 'bg-white text-indigo-700 border border-gray-200 hover:bg-gray-50 focus:ring-indigo-100 hover:shadow-lg',
    outline: 'bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-200',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
