import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './CategoryCard/index.module.scss'

interface CategoriesProps {
  categories: Category[] | null
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  if (!categories || !Array.isArray(categories)) {
    return <div>No categories available</div>
  }

  console.log('Categories data:', categories)

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
