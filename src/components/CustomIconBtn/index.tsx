import type { IconButtonProps } from '@chakra-ui/react';
import { IconButton, Tooltip, forwardRef } from '@chakra-ui/react';

import type { IconName } from '@/components/CustomIcon';
import CustomIcon from '@/components/CustomIcon';
import type { ThemeColor } from '@/fixtures/theme';

type Props = Omit<IconButtonProps, 'icon'> & {
  icon: IconName;
  color?: ThemeColor;
  backgroundColor?: ThemeColor;
};

const defaultProps: Partial<Props> = {
  color: 'white',
  backgroundColor: 'accent',
  fontSize: '2xl',
};

const CustomIconBtn = forwardRef<Props, 'button'>((props: Props, ref) => {
  const { icon } = props;

  return (
    <Tooltip label={props['aria-label']}>
      <IconButton ref={ref} {...props} icon={<CustomIcon name={icon} />} />
    </Tooltip>
  );
});

CustomIconBtn.defaultProps = defaultProps;

export default CustomIconBtn;
