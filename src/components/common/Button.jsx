import { motion } from "framer-motion";

function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}) {
  const buttonClasses = `
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    px-8
    py-4
    font-semibold
    tracking-wide
    text-white
    bg-gradient-to-r
    from-[#B8860B]
    to-[#D4AF37]
    shadow-lg
    transition-all
    duration-300
    ${className}
  `;

  const content = (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={buttonClasses}
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
      >
        <motion.span
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-0
            left-0
            h-full
            w-1/3
            bg-white/30
            skew-x-[-25deg]
          "
        />
      </span>

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
}

export default Button;