import { CheckIcon, XIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Compatibility Table";

const features = [
  {
    feature: "CSS Grid",
    chrome: true,
    firefox: true,
    safari: true,
    edge: true,
    chromeAndroid: true,
    safariIos: true,
  },
  {
    feature: "Flexbox",
    chrome: true,
    firefox: true,
    safari: true,
    edge: true,
    chromeAndroid: true,
    safariIos: true,
  },
  {
    feature: "Container Queries",
    chrome: true,
    firefox: true,
    safari: true,
    edge: true,
    chromeAndroid: true,
    safariIos: false,
  },
  {
    feature: "Subgrid",
    chrome: true,
    firefox: true,
    safari: true,
    edge: true,
    chromeAndroid: false,
    safariIos: true,
  },
  {
    feature: ":has() Selector",
    chrome: true,
    firefox: true,
    safari: true,
    edge: true,
    chromeAndroid: true,
    safariIos: true,
  },
];

const SupportIcon = ({ supported }: { supported: boolean }) => (
  <div className="flex justify-center">
    {supported ? (
      <CheckIcon className="size-4 text-green-600" />
    ) : (
      <XIcon className="size-4 text-red-600" />
    )}
  </div>
);

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[180px]">CSS Feature</TableHead>
          <TableHead className="text-center">Chrome</TableHead>
          <TableHead className="text-center">Firefox</TableHead>
          <TableHead className="text-center">Safari</TableHead>
          <TableHead className="text-center">Edge</TableHead>
          <TableHead className="text-center">Chrome Android</TableHead>
          <TableHead className="text-center">Safari iOS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.feature}>
            <TableCell className="font-medium">{feature.feature}</TableCell>
            <TableCell>
              <SupportIcon supported={feature.chrome} />
            </TableCell>
            <TableCell>
              <SupportIcon supported={feature.firefox} />
            </TableCell>
            <TableCell>
              <SupportIcon supported={feature.safari} />
            </TableCell>
            <TableCell>
              <SupportIcon supported={feature.edge} />
            </TableCell>
            <TableCell>
              <SupportIcon supported={feature.chromeAndroid} />
            </TableCell>
            <TableCell>
              <SupportIcon supported={feature.safariIos} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
