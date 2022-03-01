enum Membership {
    Simple,
    Standart, 
    Premium
}

const membership = Membership.Standart
const membershipRe = Membership[2];
console.log(membershipRe)


enum SocialMedia {
    Vk = 'Vkontakte',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM
console.log(social)