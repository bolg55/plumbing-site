import { StarIcon } from '@heroicons/react/20/solid';

const reviews = {
  average: 5,
  totalCount: 6,
  counts: [
    { rating: 5, count: 6 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
      Last year, Elmira's sewage was backing up into our basement, but Adam came and saved the day! He not only fixed the immediate issue (sewage everywhere), but got to the root of the problem quickly and explained everything to us along the way. He made sure to stay until everything was fixed and cleaned up, and his prices were still below other quotes we received! We'll definitely call him back for future plumbing needs (just hoping it's not more sewage)!
        `,
      author: 'Robyn Beckett',
    },
    ,
    {
      id: 2,
      rating: 5,
      content: `
      Excellent company to do business with! Adam is professional, explained everything in detail and gave us options. Highly recommend!
          `,
      author: 'Damien Parent',
    },

    {
      id: 3,
      rating: 5,
      content: `
      Adam was always quick to respond. He was professional and courteous and was able to come up with a solution to fix our problem. Highly recommend him.
          `,
      author: 'Jenny Gould',
    },
    {
      id: 4,
      rating: 5,
      content: `
      Adam was able to fit us in on short notice and fix a blocked pipe. Very professional and explained exactly what the problem was
          `,
      author: 'Matt Horst',
    },
    {
      id: 5,
      rating: 5,
      content: `
      I was dealing with a major flood in my basement. One phone call and Adam was there to help solve my issue. At 9pm, on a Sunday, in the middle of winter. Amazing service!
          `,
      author: 'Kellen Bolger',
    },

    {
      id: 6,
      rating: 5,
      content: `
        Excellent service and excellent results. He got to the bottom of the problem.
            `,
      author: 'Dianne Hamilton',
    },
    // More reviews...
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Review = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32'>
        <div className='lg:col-span-4'>
          <h2 className='text-3xl font-bold tracking-tight text-sky-800'>
            Customer Reviews
          </h2>

          <div className='mt-3 flex items-center'>
            <div>
              <div className='flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>
              <p className='sr-only'>{reviews.average} out of 5 stars</p>
            </div>
            <p className='ml-2 text-sm text-gray-900'>
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='sr-only'>Review data</h3>

            <dl className='space-y-3'>
              {reviews.counts.map((count) => (
                <div key={count.rating} className='flex items-center text-sm'>
                  <dt className='flex flex-1 items-center'>
                    <p className='w-3 font-medium text-gray-900'>
                      {count.rating}
                      <span className='sr-only'> star reviews</span>
                    </p>
                    <div
                      aria-hidden='true'
                      className='ml-1 flex flex-1 items-center'
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />

                      <div className='relative ml-3 flex-1'>
                        <div className='h-3 rounded-full border border-gray-200 bg-gray-100' />
                        {count.count > 0 ? (
                          <div
                            className='absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400'
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className='ml-3 w-10 text-right text-sm tabular-nums text-gray-900'>
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='mt-10'>
            <h3 className='text-lg font-medium text-gray-900'>
              Share your thoughts
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              If you’ve used our services, share your thoughts with other
              customers
            </p>

            <a
              href='https://g.page/r/CTq5Y0ZcUfrnEB0/review'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full'
            >
              Write a review
            </a>
          </div>
        </div>

        <div className='mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0'>
          <h3 className='sr-only'>Recent reviews</h3>

          <div className='flow-root'>
            <div className='-my-12 divide-y divide-gray-200'>
              {reviews.featured.map((review) => (
                <div key={review?.id} className='py-12'>
                  <div className='flex items-center'>
                    <div>
                      <h4 className='text-sm font-bold text-gray-900'>
                        {review?.author}
                      </h4>
                      <div className='mt-1 flex items-center'>
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review!.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden='true'
                          />
                        ))}
                      </div>
                      <p className='sr-only'>{review?.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <p className='mt-4 space-y-6 text-base italic text-gray-600'>
                    {review?.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
