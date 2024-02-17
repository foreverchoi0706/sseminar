import type { FC } from "react";
import Search from "@/pages/member/search";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Registry from "@/pages/member/registry";
import Upload from "@/pages/member/upload";

const Member: FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>검색</Tab>
        <Tab>신규 등록</Tab>
        <Tab>명단 업로드</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Search />
        </TabPanel>
        <TabPanel>
          <Registry />
        </TabPanel>
        <TabPanel>
          <Upload />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Member;
