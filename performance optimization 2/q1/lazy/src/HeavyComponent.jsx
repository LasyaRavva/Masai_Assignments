import React from 'react';

const HeavyComponent = () => {
  // Console log to verify rendering behavior
  console.log('🔵 HeavyComponent rendered at:', new Date().toLocaleTimeString());

  // Simulate a heavy UI section with multiple items
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Heavy Item ${i + 1}`,
    description: `This is a description for item ${i + 1}`,
  }));

  return (
    <div className="heavy-component">
      <h2>🚀 Heavy Component (Lazy Loaded)</h2>
      <p className="info">
        ✅ This component is wrapped with React.memo<br />
        ✅ This component is lazy loaded<br />
        ✅ Check the console - it should render only once!
      </p>
      
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders
// This will only re-render if props change
export default React.memo(HeavyComponent);
