import { Heart, MessageCircle, ThumbsUp } from "lucide-react";

const BlogDetail = () => {
  return (
    <div class="flex items-center justify-center">
      <div class="w-[700px] mx-auto p-6 mt-8">
        <h2 class="text-3xl font-bold leading-10">
          Why I Keep Failing Candidates During Google Interviews.
        </h2>
        <div className="flex items-center mt-8 gap-4">
          <div className="w-16 h-16">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>Alexander Nguyen</p>
            <p className="text-sm">Published in Apr 12, 2023.</p>
          </div>
        </div>
        <div className="mt-8 border-y border-gray-200">
          <div className="py-3">
            <div className="flex items-center gap-8">
              <div className="flex text-sm items-center">
                <MessageCircle size={20} color="#322f2f" strokeWidth={1.75} />{" "}
                <span className="ml-1">12</span>
              </div>
              <div className="flex text-sm items-center">
                <ThumbsUp size={20} color="#322f2f" strokeWidth={1.75} />{" "}
                <span className="ml-1">12</span>
              </div>

              <div className="flex text-sm items-center">
                <Heart size={20} strokeWidth={1.75} />{" "}
                <span className="ml-1">16</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nobis odit aspernatur fuga necessitatibus iusto, molestiae illo doloremque, velit reiciendis exercitationem perspiciatis consequatur dolor assumenda nisi veritatis? Cupiditate consectetur voluptatibus vitae repellat, amet maiores quam dolor explicabo ratione blanditiis commodi saepe rem ea, officia laboriosam odit cumque numquam quod molestiae laudantium quaerat distinctio porro placeat alias! Recusandae delectus necessitatibus, numquam at voluptate minus eum placeat veritatis quia, ipsam nemo iusto explicabo quae unde officia assumenda perferendis odio labore. Doloribus atque delectus, distinctio molestiae laboriosam saepe nulla cumque reiciendis excepturi minus ratione totam! Aliquam dolor debitis repellendus provident cupiditate facilis nobis culpa alias tenetur perferendis laborum, earum vitae, nemo fugit mollitia! Perspiciatis fugiat sunt, provident consectetur eaque nam nemo suscipit quibusdam error, expedita quisquam autem non similique repudiandae. A vel unde eveniet? Veniam quaerat aperiam cum perspiciatis voluptatum animi deleniti quo accusantium deserunt tempora eaque eveniet, laborum dolorem porro, ea amet? Provident temporibus praesentium sed quos quidem debitis. Magni voluptates ducimus amet sint doloribus maxime quod. Aspernatur harum sunt repudiandae. Cupiditate, tempora ab! Perspiciatis, error aspernatur? Dolore blanditiis at tempore quisquam, hic ipsum quo tempora dolor consequuntur labore magni obcaecati. Voluptate illum id pariatur esse quas inventore voluptates. Nisi, qui mollitia?
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
