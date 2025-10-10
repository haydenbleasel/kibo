import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Choice Cards";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldGroup>
      <FieldSet>
        <FieldLabel htmlFor="compute-environment">
          Compute Environment
        </FieldLabel>
        <FieldDescription>
          Select the compute environment for your cluster.
        </FieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel className="bg-background" htmlFor="kubernetes">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kubernetes</FieldTitle>
                <FieldDescription>
                  Run GPU workloads on a K8s configured cluster.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem id="kubernetes" value="kubernetes" />
            </Field>
          </FieldLabel>
          <FieldLabel className="bg-background" htmlFor="vm">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Virtual Machine</FieldTitle>
                <FieldDescription>
                  Access a VM configured cluster to run GPU workloads.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem id="vm" value="vm" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  </div>
);

export default Example;
