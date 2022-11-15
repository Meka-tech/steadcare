import React from "react";
import styled from "styled-components";
import { BsFileEarmarkPlus, BsTrash } from "react-icons/bs";
import { MdDownloading } from "react-icons/md";
import { DeleteModal, ImageModal } from "./Modal";
import { useState } from "react";
import { mobile } from "../../../../../Utilities/responsive";
import { useIsMobile } from "../../../../../hooks/useIsMobile";

export const Column = ({ data }) => {
  const [acceptCancelModal, setAcceptCancelModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const Delete = () => {
    setAcceptCancelModal(true);
  };
  const View = () => {
    setImageModal(true);
  };
  const Download = () => {};

  const IsMobile = useIsMobile();
  return (
    <Main>
      {acceptCancelModal && (
        <DeleteModal setActive={setAcceptCancelModal} data={data} />
      )}
      {imageModal && <ImageModal setActive={setImageModal} data={data} />}

      <BsFileEarmarkPlus size={IsMobile ? 15 : 20} color={"#555555"} />
      <Name>Chinenye Adaeze</Name>
      <FileName>X-ray results.pdf</FileName>
      <FileSize>125kb</FileSize>
      <ViewText onClick={() => View()}>View</ViewText>
      <BsTrash
        size={IsMobile ? 15 : 20}
        color={"#555555"}
        style={{ cursor: "pointer" }}
        onClick={() => Delete()}
      />
      <MdDownloading
        size={IsMobile ? 15 : 20}
        color={"#555555"}
        style={{ cursor: "pointer" }}
        onClick={() => Download()}
      />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-bottom: 1px solid rgba(85, 85, 85, 0.7);
  height: 4rem;
  padding: 0 2rem;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 5% 30% 25% 20% 5% 5% 5%;
  align-items: center;
  ${mobile({
    gridTemplateColumns: "5% 30% 30% 12% 9% 9% 9%",
    padding: "0 1rem"
  })}
`;
const Name = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  ${mobile({ fontSize: "1.2rem" })}
`;

const FileName = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  ${mobile({ fontSize: "1.2rem" })}
`;
const FileSize = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  color: rgba(85, 85, 85, 1);
  ${mobile({ fontSize: "1.2rem" })}
`;
const ViewText = styled.h1`
  color: blue;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
  ${mobile({ fontSize: "1rem" })}
`;
