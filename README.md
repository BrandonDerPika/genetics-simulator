# Skin Tone Genetics Simulator

[**Play the Simulation**](https://brandonderpika.github.io/genetics-simulator/)

An interactive genetics simulator exploring how inherited alleles influence observable traits.

The simulator models two genes, each with two alleles, to demonstrate how different genetic combinations can produce different phenotypes. Configure two parents, examine their genotypes, and simulate the possible genetic combinations their child could inherit.

## Features

### Parent Genotypes

Configure the genetic makeup of two parents using four alleles per parent:

- **Gene A:** Two alleles (A1 and A2).
- **Gene B:** Two alleles (B1 and B2).
- **Allele Values:** Each allele can be either 0 (light) or 1 (dark).

The simulator calculates each parent's phenotype by adding the values of their four alleles.

### Parent Generation

Rather than manually selecting every allele, you can generate a parent with a selected phenotype:

- Pale
- Light
- Mixed
- Dark
- Ebony

The simulator randomly selects a compatible genotype for the chosen phenotype. This demonstrates how different genotypes can produce the same observable trait.

### Child Inheritance

Combine two parent genotypes to explore the possible genetic combinations inherited by their child.

The simulator:
- Examines the possible alleles inherited from each parent.
- Generates combinations across both genes.
- Calculates the child's total allele value.
- Displays the resulting genotype and phenotype.

## How the Model Works

Each parent has four alleles, two for each gene. Every allele contributes either 0 or 1 to the total.

The sum determines the modeled phenotype:

| Total Allele Value | Phenotype |
|---|---|
| 0 | Pale |
| 1 | Light |
| 2 | Mixed |
| 3 | Dark |
| 4 | Ebony |

For example, a genotype with three dark alleles and one light allele produces a total of 3, corresponding to the Dark phenotype.

Because multiple allele combinations can have the same total, different genotypes can produce the same phenotype.

## Limitations

This is a simplified educational model, not an accurate representation of human skin pigmentation genetics.

The simulation assumes:
- Two genes determine the modeled trait.
- Each allele contributes equally to the phenotype.
- Alleles have only two possible values.
- Environmental influences are not modeled.

Actual human skin pigmentation is influenced by many genes and environmental factors.


## Motivation

I built this project to experiment with genetic inheritance and the relationship between genotype and phenotype.

One particularly interesting aspect of genetics is that two individuals can exhibit the same observable trait while having different underlying genetic combinations. This simulator explores that idea through a simplified inheritance model.
