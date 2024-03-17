import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className='container'>
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ionicframework.com/docs/components'
          style={{ color: '#014441' }}
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
