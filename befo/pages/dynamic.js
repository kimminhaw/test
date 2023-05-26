import { Link } from "@chakra-ui/react";
import React from "react";

const DynamicPage = ({ dynamicContent }) => {
  return (
    <div>
      <h1>동적페이지입니다.</h1>
      <div>
        <Link href="/">홈으로</Link>
      </div>
      <Link href="/static">정적페이지</Link>
      <p>{dynamicContent}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // 서버에서 데이터를 가져오는 예시입니다. 여기서는 간단하게 하기 위해 하드코딩합니다.
  const dynamicContent = "Dynamic content from server";

  return {
    props: {
      dynamicContent,
    },
  };
}

export default DynamicPage;
