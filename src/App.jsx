import './App.css';
import Header from './components/header';
import Content from './components/content';
import RecordingButton from './components/RecordingButton';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
            <Content />
            <RecordingButton />
    </div>
  );
}

export default App;
