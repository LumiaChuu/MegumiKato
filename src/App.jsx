// src/App.jsx

function App() {
  // Menambahkan style langsung di sini untuk memastikan teksnya terlihat
  // dengan latar belakang putih dan warna teks hitam.
  const containerStyle = {
    padding: '40px',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: '24px'
  };

  return (
    <div style={containerStyle}>
      <h1>Halo, Dunia!</h1>
      <p>Jika Anda bisa melihat teks ini, artinya proses build dan deployment Anda sudah BENAR.</p>
      <p>Masalahnya ada di dalam kode asli App.jsx (kemungkinan GSAP atau hooks).</p>
    </div>
  )
}

export default App
