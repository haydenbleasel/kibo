import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const title = "Information with Long Content";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Info</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Privacy Policy Update</AlertDialogTitle>
        <AlertDialogDescription className="max-h-60 overflow-y-auto">
          We have updated our privacy policy to provide you with greater
          transparency about how we collect, use, and protect your data.
          <br />
          <br />
          Key changes include:
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Enhanced data encryption standards</li>
            <li>Improved cookie management options</li>
            <li>Clearer data retention policies</li>
            <li>Expanded user rights and controls</li>
            <li>Updated third-party data sharing guidelines</li>
          </ul>
          <br />
          Please review the full policy in your account settings. By continuing
          to use our service, you agree to these updated terms.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>I Understand</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
