import ContentBlock from '@/components/petstore-comp/content-block';
import H1 from '@/components/petstore-comp/h1';
import React from 'react';

const AccountPage = () => {
  return (
    <main>
      <H1 className="my-8 text-white"> Your Account </H1>
      <ContentBlock className="h-[500px] flex justify-center items-center">
        <p> logged in as ...</p>
      </ContentBlock>
    </main>
  );
};

export default AccountPage;
