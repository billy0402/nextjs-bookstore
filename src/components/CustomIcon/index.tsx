import type { IconProps } from '@chakra-ui/react';
import { Icon as ChakraIcon, forwardRef } from '@chakra-ui/react';

import type { IconBaseProps } from 'react-icons';
import {
  AiFillFileZip,
  AiFillMinusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSetting,
} from 'react-icons/ai';
import {
  BiListCheck,
  BiPlus,
  BiSolidAddToQueue,
  BiSolidBusiness,
} from 'react-icons/bi';
import {
  BsBuildingFillUp,
  BsExclamationCircleFill,
  BsEyeFill,
  BsFillFileEarmarkTextFill,
  BsPersonBoundingBox,
} from 'react-icons/bs';
import {
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaFileInvoice,
  FaFilter,
  FaListAlt,
  FaMapSigns,
  FaPeopleArrows,
  FaProjectDiagram,
  FaSearchPlus,
} from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';
import {
  HiClipboardDocumentList,
  HiMiniClipboardDocumentList,
} from 'react-icons/hi2';
import { ImHome2, ImUserTie } from 'react-icons/im';
import { IoIosBusiness, IoIosSettings } from 'react-icons/io';
import { IoAddCircle, IoLogOut } from 'react-icons/io5';
import { LiaUserCheckSolid } from 'react-icons/lia';
import { LuUserCheck } from 'react-icons/lu';
import {
  MdDelete,
  MdDeleteSweep,
  MdEdit,
  MdOutlineFactCheck,
  MdOutlineSearch,
} from 'react-icons/md';
import {
  RiErrorWarningFill,
  RiGovernmentFill,
  RiSearchEyeLine,
  RiUserSettingsFill,
} from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { TbReplaceFilled } from 'react-icons/tb';
import { TiFlowChildren, TiFlowSwitch } from 'react-icons/ti';

export const icons = {
  // 登出
  logOut: IoLogOut,
  // 搜尋_眼睛
  searchEyeLine: RiSearchEyeLine,
  // 公司商業
  solidBusiness: BiSolidBusiness,
  // 壓縮檔案
  fillFileZip: AiFillFileZip,
  // 人群交流
  peopleArrows: FaPeopleArrows,
  // 文字填滿文件
  fillFileTextFill: BsFillFileEarmarkTextFill,
  // 檔案單據
  fileInvoice: FaFileInvoice,
  // 清單確認
  listCheck: BiListCheck,
  // 專案流程圖
  projectDiagram: FaProjectDiagram,
  // 設定
  settings: IoIosSettings,
  // 空心設定
  outlineSettings: AiOutlineSetting,
  // 使用者設定
  userSettings: RiUserSettingsFill,
  // 選擇使用者
  personSelected: LuUserCheck,
  // 使用者群組
  userGroup: HiUserGroup,
  // 正裝使用者
  userTie: ImUserTie,
  // 使用者連結
  userGear: FaUsersGear,
  // 確認使用者
  userCheckSolid: LiaUserCheckSolid,
  // 篩選
  filter: FaFilter,
  // 搜尋
  search: MdOutlineSearch,
  // 進階搜尋
  advancedSearch: FaSearchPlus,
  // 加號新增
  plus: BiPlus,
  // 隊列新增
  addToQueue: BiSolidAddToQueue,
  // 檢視
  view: BsEyeFill,
  // 編輯
  edit: MdEdit,
  // 刪除
  delete: MdDelete,
  // 批次刪除
  bulkDelete: MdDeleteSweep,
  // 驚嘆號
  exclamationMark: RiErrorWarningFill,
  // 交叉
  cross: RxCrossCircled,
  // 減號
  minus: AiFillMinusCircle,
  // 商業
  business: IoIosBusiness,
  // 建築物向上呈報
  buildingFillUp: BsBuildingFillUp,
  // 項目確認
  outlineFactCheck: MdOutlineFactCheck,
  // 項目列表
  listAlt: FaListAlt,
  // 項目複製列表
  clipboardDocumentList: HiClipboardDocumentList,
  // 政府建築
  governmentFill: RiGovernmentFill,
  // 項目複製細節列表
  miniClipboardDocumentList: HiMiniClipboardDocumentList,
  // 首頁
  home: ImHome2,
  // 地圖指標
  mpSigns: FaMapSigns,
  // 向左三角箭頭
  chevronLeft: FaChevronLeft,
  // 向右三角箭頭
  chevronRight: FaChevronRight,
  // 向上三角箭頭
  chevronUp: FaChevronUp,
  // 向下三角箭頭
  chevronDown: FaChevronDown,
  // 向上箭頭
  arrowUp: AiOutlineArrowUp,
  // 向下箭頭
  arrowDown: AiOutlineArrowDown,
  // 流程圖子項目
  flowChildren: TiFlowChildren,
  // 切換流程
  flowSwitch: TiFlowSwitch,
  // 取代項目
  replaceFilled: TbReplaceFilled,
  // 圓形填滿_驚嘆號
  exclamationCircleFill: BsExclamationCircleFill,
  // 圓形填滿_向左三角箭頭
  chevronCircleLeft: FaChevronCircleLeft,
  // 圓形填滿_向右三角箭頭
  chevronCircleRight: FaChevronCircleRight,
  // 圓形填滿_向上三角箭頭
  chevronCircleUp: FaChevronCircleUp,
  // 圓形填滿_向下三角箭頭
  chevronCircleDown: FaChevronCircleDown,
  // 圓形填滿_新增
  addCircle: IoAddCircle,
  // 邊框盒子_個人
  personBoundingBox: BsPersonBoundingBox,
};

export type IconName = keyof typeof icons;

type Props = IconProps &
  IconBaseProps & {
    name: IconName;
  };

const CustomIcon = forwardRef<Props, 'svg'>((props: Props, ref) => {
  return <ChakraIcon as={icons[props.name]} ref={ref} {...props} />;
});

export default CustomIcon;
