import { useEffect, useState } from 'react';


export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <div style={{ color: '#444', fontSize: 13 }}>
        © 2026 BoxBox · Built for F1 fans
      </div>
    </footer>
  );
}
