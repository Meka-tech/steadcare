import { Button } from "../../../../Components";
import { ComplaintInput, InputComponent, MultiInput } from "./inputComponent";
import { CreateHistoryDiv, CreateHistoryTitle, FooterLink } from "./style";

export const CreateMedicalHistoryForm = () => {
  return (
    <CreateHistoryDiv>
      <InputComponent title={"Patient's Name :"} />
      <InputComponent title={"Doctor's Name :"} />
      <InputComponent title={"Presenting Complaints :"} />
      <CreateHistoryTitle>History of Presenting Complaints</CreateHistoryTitle>
      <MultiInput title={"Compalint"} />
      <MultiInput title={"Cause"} />
      <MultiInput title={"Course"} />
      <MultiInput title={"Complications"} />
      <MultiInput title={"Care"} />
      <InputComponent title={"Previous Admission :"} />
      <MultiInput title={"Family & Social History :"} row="2" />
      <MultiInput title={"Examinations :"} row="15" />
      <MultiInput title={"Investigations :"} row="2" />
      <MultiInput title={"Diagnosis :"} row="2" />
      <MultiInput title={"Management :"} row="12" />
      <FooterLink>Available Investigation results</FooterLink>
      <div
        style={{ margin: "auto", width: "fit-content", marginBottom: "4rem" }}
      >
        <Button text="Submit" />
      </div>
    </CreateHistoryDiv>
  );
};
