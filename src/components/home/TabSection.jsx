import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LatestBlog from "./LatestBlog";
import TabContentCom from "./TabContentCom";

const TabSection = () => {
  return (
    <section id="latest" className="container py-2">
      <div className="my-6">
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="lg:grid w-full grid-cols-6 hidden my-6 max-w-full">
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="beauty">Beauty & Fashion</TabsTrigger>
            <TabsTrigger value="health">Health & Fitness</TabsTrigger>
            <TabsTrigger value="recipe">Recipe</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="latest">
            <LatestBlog />
          </TabsContent>
          <TabsContent value="technology">
            <TabContentCom />
          </TabsContent>
          <TabsContent value="beauty">
            <TabContentCom />
          </TabsContent>
          <TabsContent value="health">
            <TabContentCom />
          </TabsContent>
          <TabsContent value="recipe">
            <TabContentCom />
          </TabsContent>
          <TabsContent value="reviews">
            <TabContentCom />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabSection;
