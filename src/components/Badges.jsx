import { Badge } from "@chakra-ui/react"

import theme from "@/theme/theme"

function Badges({badgeTag}) {
    const {colors, fonts} = theme
  return (
    <Badge
      right='0'
      w={'65px'}
      h={'25px'}
      m={'10px'}
      color={'white'}
      display={'flex'}
      fontSize={'12px'}
      borderRadius={'5px'}
      position={'absolute'}
      fontWeight={'semibold'}
      fontFamily={fonts.popup}
      justifyContent={'center'}
      bgColor={
          badgeTag === 'Featured' ? colors.brand.primary :
          badgeTag === 'Verified' && '#489226'
      }
    >
        {badgeTag}
    </Badge>
  )
}

export default Badges