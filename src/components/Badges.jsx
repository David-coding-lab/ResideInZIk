import { Badge } from "@chakra-ui/react"

import theme from "@/theme/theme"

function Badges({badgeTag}) {
    const {colors, fonts} = theme
  return (
    <Badge
        bgColor={
            badgeTag === 'Featured' ? colors.brand.primary :
            badgeTag === 'Verified' && '#489226'
        }
        w={'65px'}
        h={'25px'}
        color={'white'}
        borderRadius={'5px'}
        float={'right'}
        m={'10px'}
        display={'flex'}
        justifyContent={'center'}
        fontFamily={fonts.popup}
        fontSize={'12px'}
        fontWeight={'semibold'}
    >
        {badgeTag}
    </Badge>
  )
}

export default Badges