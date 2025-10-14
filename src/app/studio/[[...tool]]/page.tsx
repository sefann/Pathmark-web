'use client'

export default function StudioPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', background: '#1a1a1a', color: 'white' }}>
      <h1>Sanity Studio</h1>
      <p>Project ID: ch79hnv9</p>
      <p>Dataset: production</p>
      
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="https://ch79hnv9.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            margin: '0.5rem'
          }}
        >
          View Content in Sanity
        </a>
        
        <a 
          href="https://www.sanity.io/manage/personal/project/ch79hnv9"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            margin: '0.5rem'
          }}
        >
          Manage Project
        </a>
      </div>
      
      <div style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
        <p>To access the full Sanity Studio, please:</p>
        <ol style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Visit the "Manage Project" link above</li>
          <li>Login with your Sanity account</li>
          <li>Use the built-in Sanity Studio</li>
        </ol>
      </div>
    </div>
  )
}