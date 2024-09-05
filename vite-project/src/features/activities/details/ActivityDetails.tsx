import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  selectedActivity: Activity;
  handleCancelSelectedActivity: () => void;
  handleFormOpen: (id: string) => void;
}

const ActivityDetails = ({
  selectedActivity,
  handleCancelSelectedActivity,
  handleFormOpen
}: Props) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
      <CardContent>
        <CardHeader>{selectedActivity.title}</CardHeader>
        <CardMeta>
          <span>{selectedActivity.date}</span>
        </CardMeta>
        <CardDescription>{selectedActivity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button onClick={() => handleFormOpen(selectedActivity.id)} basic color="blue" content="Edit" />
          <Button
            onClick={handleCancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
