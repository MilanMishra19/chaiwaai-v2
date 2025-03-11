

const CozyButton = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        rounded-lg 
        font-medium 
        transition-colors 
        duration-300
        bg-white
        text-gray-800
        border border-gray-300
        hover:bg-gray-100
        focus:outline-none
        focus:ring-2 
        focus:ring-gray-200
        active:bg-gray-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${props.className || ''} // Allows for additional custom classes
      `}
      {...props} // Spread any other props like 'type', 'disabled', etc.
    >
      {children}
    </button>
  );
};

export default CozyButton;