import './WelcomeContainer.css';

interface ContainerProps {
  title: string;
  subtitle: string;
}

const WelcomeContainer: React.FC<ContainerProps> = ({ title, subtitle }) => {
  return (
    <div className='welcome-container'>
      <div className='homepage'>
        <img src='../../public/Logo.svg' width='100px' height='100px'></img>
        <strong style={{ fontSize: '36px', color: '#0A0A0A' }}>{title}</strong>
        <p style={{ fontSize: '16px', color: '#777777' }}>{subtitle}</p>
        <button
          style={{
            backgroundColor: '#014441',
            borderRadius: '5px',
            color: '#FFFFF0',
            width: '335px',
            height: '60px',
            fontSize: '21px',
          }}
        >
          Create new wallet
        </button>
        <a
          target='#'
          style={{
            color: '#014441',
            textDecoration: 'none',
            cursor: 'pointer',
            fontSize: '21px',
          }}
        >
          Restore wallet
        </a>
      </div>
    </div>
  );
};

export default WelcomeContainer;
