import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const projectID="475e95d6-f0b8-4257-bf9d-b4e2ecb1a886"
const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App