import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import { LogoCard } from "../../comps/LogoCard"
import { TextLink } from "../../atoms/TextLink"


FeaturedPartners.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function FeaturedPartners({ className = "", partners }) {
    return (
        <section className={` ${className}`}>
            <Container className="pb-12 md:pb-0">
                <div className="col-span-full">
                    <Heading className="">Trusted by more than 500 brands</Heading>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 my-8 md:my-16">
                        {partners.map(partner => <LogoCard
                            key={partner.alt}
                            src={partner.src}
                            alt={partner.alt}
                            height={partner.height}
                            width={partner.width}
                        />)}
                    </div>
                    <TextLink size="lg" href="#">read customer stories</TextLink>
                </div>
            </Container>
        </section>
    )
}
