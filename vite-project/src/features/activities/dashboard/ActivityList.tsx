import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

interface Props {
  activities: Activity[];
  submitting: boolean;
  handleSelectActivity: (id: string) => void;
  handleDeleteActivity: (id: string) => void;
}

const ActivityList = ({
  activities,
  submitting,
  handleSelectActivity,
  handleDeleteActivity,
}: Props) => {
  const [target, setTarget] = useState("");

  const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    handleDeleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="view"
                  color="blue"
                  onClick={() => handleSelectActivity(activity.id)}
                />
                <Button
                  name={activity.id}
                  loading={submitting && target === activity.id}
                  floated="right"
                  content="delete"
                  color="red"
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
