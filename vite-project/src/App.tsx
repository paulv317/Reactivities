import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List, ListItem } from "semantic-ui-react";

declare interface Activity {
  id: number;
  title: string;
  date: Date;
  description: string;
  category: string;
  city: string;
  venue: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then((res) => {
        setActivities(res.data);
      })
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            {activity.title}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
