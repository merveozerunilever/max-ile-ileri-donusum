import Manifesto from "./components/pages/Manifesto";
import Kesfet from "./components/pages/Kesfet";
import FikirKutuphanesi from "./components/pages/FikirKutuphanesi";
import MaxBlog from "./components/pages/MaxBlog";
import SSS from "./components/pages/SSS";
import ProjeHakkinda from "./components/pages/ProjeHakkinda";
import BlogDetail1 from "./components/pages/maxBlog/BlogDetail1";
import BlogDetail2 from "./components/pages/maxBlog/BlogDetail2";
import BlogDetail3 from "./components/pages/maxBlog/BlogDetail3";
import BlogDetail4 from "./components/pages/maxBlog/BlogDetail4";


export const routes = [
  {name: "Manifesto", pathname: "/", element: Manifesto, isNav:true},
  {name: "Kesfet", pathname: "/kesfet", element: Kesfet, isNav:true},
  {name: "FikirKutuphanesi", pathname: "/fikir-Kutuphanesi", element: FikirKutuphanesi, isNav:true},
  {name: "MaxBlog", pathname: "/max-blog", element: MaxBlog, isNav:true},
  {name: "SSS", pathname: "/sikca-sorulan-sorular", element: SSS, isNav:false},
  {name: "ProjeHakkinda", pathname: "/sikca-sorulan-sorular", element: SSS, isNav:false},
  {name: "BlogDetail1", pathname: "/max-blog-dunyadan-yaratici-ileri-donusum-ornekleri", element: BlogDetail1, isNav:false},
  {name: "BlogDetail2", pathname: "//max-blog-oynamanin-gelecegi", element: BlogDetail2, isNav:false},
  {name: "BlogDetail3", pathname: "/max-blog-dongusel-hareket-ile-ileri-donusum", element: BlogDetail3, isNav:false},
  {name: "BlogDetail4", pathname: "/max-blog-mimari-reenkarnasyon-ve-ileri-donusum", element: BlogDetail4, isNav:false},
]