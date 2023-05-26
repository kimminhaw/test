import { AlertDialogContent, Link } from "@chakra-ui/react";

export default function Index() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <div>
        <Link href="/static">정적페이지</Link>
      </div>
      <Link href="/dynamic">동적페이지</Link>
    </div>
  );
}
